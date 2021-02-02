import * as React from 'react';
import { DataGrid } from '@material-ui/data-grid';
import { Button } from "@material-ui/core";
import "./styles.css";
import { getusers, getdeleted } from "../../actions/admin";

const columns = [
    { field: 'id', headerName: 'ID', width: 300 },
    { field: 'username', headerName: 'Username', width: 130 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'firstname', headerName: 'Firstname', width: 130},
    { field: 'lastname', headerName: 'Lastname', width: 130},
    { field: 'post', headerName: 'Post', type: 'number', width: 70},
    ];
class AdminUserTable extends React.Component {
    state = {
        data_col: columns,
        data_row: [],
        selected_row: []
    }
    delete_all() {
        for (let i = 0; i < this.state.selected_row.length; i++) {
            getdeleted(this.state.selected_row[i]);
        }
    }
    render() {
        getusers(this)
        if (this.state.data_row.length > 0) {
            return (
                <div>
                    <div style={{ height: 550, width: '100%' }}>
                    <DataGrid rows={this.state.data_row} columns={columns} pageSize={8} 
                    checkboxSelection
                    onSelectionChange={(selected)=>{this.state.selected_row=(selected.rowIds)}}
                    />
                    </div>
                    <div class="delete">
                        {/* {()=>getusers(this)} */}
                        <Button variant="contained" color="secondary" onClick={()=>this.delete_all()}>
                            Remove
                        </Button>
                    </div>
                </div>
            );
        } 
        return (<div>Loading Users...(keep loading until we have one user)</div>);
    }
}
export default AdminUserTable;
    