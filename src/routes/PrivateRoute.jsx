import { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export default function PrivateRoute({ children }) {
  const { currentUser } = useSelector((state) => state.user);
  const [open, setOpen] = useState(!currentUser);

  // If logged in → allow route
  if (currentUser) return children;

  return (
    <div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="w-100 dark bg-background text-foreground">
          <DialogHeader>
            <DialogTitle>Login Required</DialogTitle>
            <DialogDescription>
              You must log in to access this page.
            </DialogDescription>
          </DialogHeader>

          <DialogFooter>
            <Button onClick={() => setOpen(false)}  className="w-full mt-4">
              Go to Login
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {!open && <Navigate to="/login" replace />}
    </div>
  );
}
