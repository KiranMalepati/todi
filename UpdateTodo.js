import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

const UpdateTodo = ({
  open,
  handleClose,
  handleUpdate,
  handleUpdateChange,
  updateTodo,
}) => {
  return (
    <div className="todo-delete-dialog">
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          Are you sure want to Update the todo ?
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            The Update todo item title is:{" "}
            <strong>
              <em>{updateTodo.title}</em>
            </strong>
          </DialogContentText>
          <input
            type="text"
            defaultValue={updateTodo.title}
            value={updateTodo.title}
            onChange={handleUpdateChange}
            placeholder="Update todo title here..."
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="error">
            Cancel
          </Button>
          <Button onClick={handleUpdate} autoFocus>
            Update
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default UpdateTodo;
