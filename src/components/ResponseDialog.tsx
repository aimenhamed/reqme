import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import JSONPretty from "react-json-pretty";

type ResponseDialogProps = {
  title: string;
  response: string;
  isOpen: boolean;
  onClose: () => void;
  error: string;
};

export default function ResponseDialog({
  title,
  response,
  isOpen,
  onClose,
  error,
}: ResponseDialogProps) {
  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      PaperProps={{
        style: {
          backgroundColor: "#242424",
          boxShadow: "none",
        },
      }}
    >
      <DialogTitle sx={{ color: "white" }}>{title}</DialogTitle>
      <DialogContent sx={{ color: "white" }}>
        <JSONPretty data={response} />
        {error && <p>{error}</p>}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
