<?php

namespace DB;

class DBAccess{
    private const HOST_DB = "127.0.0.1";
    private const DATABASE_NAME= "gdare";
    private const USERNAME="gdare";
    private const PASSWORD="ahGhih5aeph3ao6y";

    private $connection;

    public function openDBConnection() {
        $this->connection = mysqli_connection(
            DBAccess::HOST_DB, DBAccess::USERNAME,
            DBAccess::PASSWORD, DBAccess::DATABASE_NAME
        );
    }
}

?>