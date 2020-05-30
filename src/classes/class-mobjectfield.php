<?php
/**
 * Class representing a single museum object field.
 *
 * @package MikeThicke\WPMuseum
 */

namespace MikeThicke\WPMuseum;

/**
 * Class representing a single museum object field.
 */
class MObjectField {
	/**
	 * Database primary key of field.
	 *
	 * @var int $field_id
	 */
	public $field_id;

	/**
	 * WordPress identifier for the field. Used as name for saving and retrieving
	 * field's value from the database.
	 *
	 * @var string $slug
	 */
	public $slug;

	/**
	 * Primary key of the ObjectKind associated with this field.
	 *
	 * @var int $kind_id
	 */
	public $kind_id;

	/**
	 * Label of this field for user display.
	 *
	 * @var string $name
	 */
	public $name;

	/**
	 * Datatype of the field: plain|rich|date|factor|multiple|measure|flag.
	 *
	 * @var string $type
	 */
	public $type;

	/**
	 * Order in which to display this field in forms and the front end
	 * (ascending order).
	 *
	 * @var int $display_order
	 */
	public $display_order;

	/**
	 * Whether this field is publicly-viewable on the front end.
	 *
	 * @var bool $public
	 */
	public $public;

	/**
	 * Whether this field is required to be filled in when posts are published.
	 *
	 * @var bool $required
	 */
	public $required;

	/**
	 * Whether this field is displayed in the Quick Browse table.
	 *
	 * @var bool $quick_browse
	 */
	public $quick_browse;

	/**
	 * Help text for users filling in this field.
	 *
	 * @var string $help_text
	 */
	public $help_text;

	/**
	 * Detailed instructions for editng the field.
	 *
	 * @var string $detailed_instructions
	 */
	public $detailed_instructions;

	/**
	 * Description of the site for visitors, to be displayed on the front end.
	 *
	 * @var string $public_description
	 */
	public $public_description;

	/**
	 * Regular expression that this field must conform to. Also used for sorting.
	 *
	 * @var string $field_schema
	 */
	public $field_schema;

	/**
	 * Maximum length of field. Only applies to plain or rich type. 0 = no limit.
	 *
	 * @var int $max_length
	 */
	public $max_length;

	/**
	 * Labels for each dimension (eg. Length, Width, Height). Only applies to measure type.
	 *
	 * @var [string] $dimensions
	 */
	public $dimensions;

	/**
	 * Measurement units (kg, cm, m, lbs, g, etc). Only applies to measure type.
	 *
	 * @var string $units
	 */
	public $units;

	/**
	 * List of allowed factors for the field. Only applies to factor and
	 * multiple factor types.
	 *
	 * @var [string] $factors
	 */
	public $factors;

	/**
	 * Default constructor.
	 */
	public function __construct() {
	}

	/**
	 * Create a new instance of MObjectField from a database row.
	 *
	 * @param Object $row A raw row fetched from the database.
	 * @return MObjectField A new instance of MObjectField.
	 */
	public static function from_database( $row ) {
		$instance = new self();

		$instance->field_id              = intval( $row->field_id );
		$instance->slug                  = trim( wp_unslash( $row->slug ) );
		$instance->kind_id               = intval( $row->kind_id );
		$instance->name                  = trim( wp_unslash( $row->name ) );
		$instance->type                  = trim( wp_unslash( $row->type ) );
		$instance->display_order         = intval( $row->display_order );
		$instance->public                = (bool) intval( $row->public );
		$instance->required              = (bool) intval( $row->required );
		$instance->quick_browse          = (bool) intval( $row->quick_browse );
		$instance->help_text             = trim( wp_unslash( $row->help_text ) );
		$instance->detailed_instructions = trim( wp_unslash( $row->detailed_instructions ) );
		$instance->public_description    = trim( wp_unslash( $row->public_description ) );
		$instance->field_schema          = stripslashes( $row->field_schema );
		$instance->max_length            = intval( $row->max_length );
		$instance->dimensions            = json_decode( $row->dimensions, true, 2 );
		$instance->units                 = trim( wp_unslash( $row->units ) );
		$instance->factors               = json_decode( $row->factors, false, 1 );

		return $instance;
	}

	/**
	 * Sets the field slug based on the name.
	 */
	private function set_field_slug_from_name() {
		global $wpdb;
		$table_name = $wpdb->prefix . WPM_PREFIX . 'mobject_fields';

		if ( is_null( $this->name ) ) {
			return;
		}

		$name = preg_replace( '/[^A-Za-z0-9 ]/', '', $this->name );
		$name = substr( trim( strtolower( str_replace( ' ', '-', $name ) ) ), 0, 255 );

		$duplicates = true;
		$duplicate_counter = 0;
		$slug = $name;
		while ( $duplicates ) {
			if ( $this->field_id < 0 ) {
				$results = $wpdb->get_results(
					$wpdb->prepare(
						"SELECT slug FROM $table_name WHERE slug = %s",
						$slug
					)
				);
			} else {
				$results = $wpdb->get_results(
					$wpdb->prepare(
						"SELECT slug FROM $table_name WHERE slug = %s AND field_id != %s",
						$slug,
						$this->field_id
					)
				);
			}
			if ( 0 < count( $results ) ) {
				$slug = $name . '_' . $duplicate_counter;
				$duplicate_counter++;
			} else {
				$duplicates = false;
			}
		}
		$this->slug = $slug;
	}

	/**
	 * Return properties as associative array.
	 */
	public function to_array() {
		$arr = [];
		$arr['field_id']              = $this->field_id;
		$arr['slug']                  = $this->slug;
		$arr['kind_id']               = $this->kind_id;
		$arr['name']                  = $this->name;
		$arr['display_order']         = $this->display_order;
		$arr['public']                = $this->public;
		$arr['required']              = $this->required;
		$arr['quick_browse']          = $this->quick_browse;
		$arr['help_text']             = $this->help_text;
		$arr['detailed_instructions'] = $this->detailed_instructions;
		$arr['public_description']    = $this->public_description;
		$arr['field_schema']          = $this->field_schema;
		$arr['max_length']            = $this->max_length;
		$arr['dimensions']            = $this->dimensions;
		$arr['units']                 = $this->units;
		$arr['factors']               = $this->factors;

		return $arr;
	}

	/**
	 * Saves the field to db, inserting if new, updating otherwise.
	 */
	public function save_to_db() {
		global $wpdb;
		$table_name = $wpdb->prefix . WPM_PREFIX . 'mobject_fields';

		if ( is_null( $this->name ) || '' === $this->name ) {
			return false;
		}

		// Ensure that slug exists and is unique.
		$this->set_field_slug_from_name();

		$field_array = $this->to_array();

		if ( $this->field_id < 0 ) {
			// New field.
			unset( $field_array['field_id'] );
			return $wpdb->insert( $table_name, $field_array );
		} else {
			return $wpdb->update( $table_name, $field_array, [ 'field_id' => $this->field_id ] );
		}
	}

	/**
	 * Deletes the field from the db.
	 */
	public function delete_from_db() {
		global $wpdb;
		$table_name = $wpdb->prefix . WPM_PREFIX . 'mobject_fields';
		if ( is_null( $this->field_id ) || 0 > $this->field_id ) {
			return false;
		}
		return $wpdb->delete( $table_name, [ 'field_id' => $this->field_id ] );
	}
}
