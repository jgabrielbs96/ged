import ibm_db
import json


dsn = (
    "DRIVER={{DRIVER}};"
    "DATABASE=DATABASE;"
    "HOSTNAME=HOSTNAME;"
    "PORT=PORT;"
    "PROTOCOL=PROTOCOL;"
    "UID=UID;"
    "PWD=PWD"
)

def execute_query(sql):
    try:
        conn = ibm_db.connect(dsn, "", "")
    except Exception as e:
        return {"error": f"Connection failed: {str(e)}"}

    try:
        stmt = ibm_db.exec_immediate(conn, sql)
        affected_rows = ibm_db.num_rows(stmt)
    except Exception as e:
        ibm_db.close(conn)
        return {"error": f"Query execution failed: {str(e)}"}

    ibm_db.close(conn)
    return {"rows_updated": affected_rows}

if __name__ == "__main__":
    import sys
    sql = sys.argv[1]
    results = execute_query(sql)
    print(json.dumps(results))
