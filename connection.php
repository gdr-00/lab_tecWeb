<?php

namespace DB;

class DBAccess{
    private const HOST_DB = "127.0.0.1";
    private const DATABASE_NAME= "gdare";
    private const USERNAME="gdare";
    private const PASSWORD="ahGhih5aeph3ao6y";

    private $connection;

    public function openDBConnection() {

        mysqli_report(MYSQLI_REPORT_ERROR);

        $this->connection = mysqli_connection(
            DBAccess::HOST_DB, DBAccess::USERNAME,
            DBAccess::PASSWORD, DBAccess::DATABASE_NAME
        );

        if(mysqli_connect_errno()) {
            return false;
        } else {
            return true;
        }
    }

    public function getList(){
        $query = "SELECT * FROM giocatori ORDER BY ID ASC";

        $queryResult = mysqli_query($this->connection, $query) or 
        die("Errore in openDBConnection: ".mysqli_error($this->connection));

        if(mysqli_num_rows($queryResult)==0){
            return NULL;
        } else {
            $result = array();
            while ($riga = mysqli_fetch_assoc($queryResult)){
                array_push($result, $riga);
            }
            $queryResult->free();
            return $result;
        }
    }
}

?>