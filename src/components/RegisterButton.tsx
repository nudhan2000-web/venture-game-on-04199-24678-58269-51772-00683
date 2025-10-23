import { motion } from "framer-motion";
import { UserPlus } from "lucide-react";
import { Button } from "@/components/ui/button";

const RegisterButton = () => {
  const handleClick = () => {
    window.open("https://docs.google.com/forms/d/e/1FAIpQLSfSyliZSwDkdyPEIcg2p-94agnqdealmDYUeEbr6PyGXOrh6w/viewform", "_blank");
  };

  return (
    <motion.div
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: 0.5 }}
      className="fixed top-4 md:top-6 right-4 md:right-6 z-50"
    >
      <Button
        onClick={handleClick}
        variant="default"
        className="gap-1 md:gap-2 font-orbitron tracking-wider border-2 border-primary bg-primary hover:bg-primary/90 box-glow-intense text-xs md:text-sm px-2 md:px-4 py-1 md:py-2"
      >
        <UserPlus className="w-3 h-3 md:w-4 md:h-4" />
        REGISTER
      </Button>
    </motion.div>
  );
};

export default RegisterButton;
