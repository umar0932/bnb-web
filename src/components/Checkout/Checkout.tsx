import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/core/ui/dialog";
import CheckoutForm from "../Forms/CheckoutForm";

interface CheckoutProps {
  isOpen: boolean; // Prop for checking if the dialog is open
  onClose: () => void; // Prop for handling dialog close
}

export default function Checkout({ isOpen, onClose }: CheckoutProps) {
  return (
    <>
      <div>
        <Dialog open={isOpen} onOpenChange={onClose}>
          <DialogContent
            className="flex flex-col"
            style={{
              width: "95%", // Make the dialog width 100% of the viewport
              height: "95%", // Make the dialog height 100% of the viewport
              maxWidth: "95%", // Allow the dialog to expand to full width
              maxHeight: "95%", // Allow the dialog to expand to full height
              overflow: "auto",
            }}
          >
            <div className="flex flex-col items-center">
              <span className="text-lg font-bold text-primary">Checkout</span>
              <span className="text-sm text-[#FF0000]">Time Left:</span>
            </div>
            {/* <DialogHeader className="flex flex-col items-center border border-red-500">
              <DialogTitle>Checkout</DialogTitle>
              <DialogTitle className="text-sm text-[#FF0000]">
                Time Left:
              </DialogTitle>
            </DialogHeader> */}
            <div className=" p-2">
              <CheckoutForm />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
}
