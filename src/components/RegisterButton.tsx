import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegisterButton = () => {
  const handleClick = () => {
    // Add your registration link here
    window.open("https://your-registration-link.com", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-6 right-6 z-50"
    >
      <Button
        onClick={handleClick}
        variant="default"
        className="gap-2 font-orbitron tracking-wider border-2 border-primary bg-primary hover:bg-primary/90 box-glow-intense"
      >
        <UserPlus className="w-4 h-4" />
        REGISTER
      </Button>
    </motion.div>
  );
};

export default RegisterButton;
