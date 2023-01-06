import Button from "react-bootstrap/Button";

function ApplicationApprovalButton({ disabled, action }) {
  return (
    <div className="d-grid gap-2" size="sm">
      <Button disabled={disabled} onClick={action}>
        Approve Application
      </Button>
    </div>
  );
}

export default ApplicationApprovalButton;
