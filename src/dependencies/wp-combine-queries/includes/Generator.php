<?php
//phpcs:disable
namespace CombinedQuery;

/**
 * Class Generator
 *
 * @since 1.0.0
 */

class Generator
{
    /**
     * @var \CombinedQuery\EmptyQuery
     */
    private $empty_query;


    /**
     * Constructor
     *
     * @param  \CombinedQuery\EmptyQuery $empty_query
     * @return void
     */
    public function __construct( EmptyQuery $empty_query )
    {
        $this->empty_query = $empty_query;
    }


    /**
     * @param array $args
     * @return array $sqls
     */
    public function get_sqls( $args = [] )
    {
        $sqls = [];

        $this->empty_query->cq_activate();

        // Collect the generated SQL for each sub-query:
        foreach ( (array) $args as $sub_args )
        {
            $this->empty_query->query( $sub_args );
            $sqls[] = $this->empty_query->cq_get_sql();
        }

        $this->empty_query->cq_deactivate();

        unset( $empty_query );

        return $sqls;
    }


    /**
     * Escape % for sprintf
     *
     * @since 1.0.2
     *
     * @param  string $string
     * @return string $string
     */
    static public function esc_percent( $string )
    {        
        return str_replace( '%', '%%', $string );
    }


    /**
     * Get combined SQL query
     *
     * @param  array 	$args
     * @param  string 	$union
     * @param  string 	$orderby
     * @param  int 	$ppp
     * @param  int 	$paged
     * @param  int 	$offset
     * @return string 	$string
     */
    public function get_request( $args = [], $union = '', $orderby = '', $ppp = 1, $paged = 1, $offset = 0 )
    {
        $request = '';

        $sqls = $this->get_sqls( $args );

        if ( 0 < count( $sqls ) )
        {
            $union = Generator::esc_percent( $union );
            $sqls  = Generator::esc_percent( $sqls );

            $unions  = '(' . join( ') ' . $union . ' (', $sqls ) . ' ) ';

            if ( -1 != $ppp ) {
                $request = sprintf(
                    "SELECT SQL_CALC_FOUND_ROWS * FROM ( {$unions} ) as combined {$orderby} LIMIT %d, %d",
                            $ppp * ( $paged - 1 ) + $offset,
                            $ppp
                        );
            } else {
                $request = "SELECT * FROM ( {$unions} ) as combined {$orderby}";
            }
        }
        return $request;
    }

} // end class

