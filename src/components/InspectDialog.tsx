import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import JSONPretty from "react-json-pretty";
import { Route } from "../../types";

type InspectDialogProps = {
  title: string;
  route: Route;
  isOpen: boolean;
  onClose: () => void;
};

export default function InspectDialog({
  title,
  route,
  isOpen,
  onClose,
}: InspectDialogProps) {
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
        <p>Headers</p>
        <JSONPretty data={route.headers} />
        <p>Body</p>
        <JSONPretty data={route.body} />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} autoFocus>
          Close
        </Button>
      </DialogActions>
    </Dialog>
  );
}
