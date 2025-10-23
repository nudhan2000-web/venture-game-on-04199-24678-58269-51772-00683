import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FileText, ChevronDown } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CaseStudiesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const caseStudies = [
    {
      id: "v001",
      title: "V001 – Food Chain Delivery Gap",
      sections: [
        {
          heading: "Problem:",
          content: "Food chains like KFC and McDonald's have their own apps and customers but depend on Swiggy and Zomato for delivery. They must follow the platforms' rules and pay high commissions, reducing profit and control."
        },
        {
          heading: "Why it happens:",
          content: "No own delivery system, high cost to build one, and no route or rider management tools."
        },
        {
          heading: "What students propose:",
          content: "Create a system to manage deliveries directly — with real-time tracking, route optimization, and shared fleet options for franchises."
        },
        {
          heading: "Goal:",
          content: "Save delivery costs, reduce platform dependency, and improve customer experience."
        }
      ]
    },
    {
      id: "v002",
      title: "V002 – Cloud Storage Cost Explosion",
      sections: [
        {
          heading: "Problem:",
          content: "Company's cloud cost increased due to unused servers, duplicated data, and no cost monitoring."
        },
        {
          heading: "Why it happens:",
          content: "No auto-shutdown, poor resource tracking, no cost alert system."
        },
        {
          heading: "What students propose:",
          content: "Dashboard to monitor cloud usage (CPU, memory, cost), Auto-stop unused instances or alerts, Optimize data storage."
        },
        {
          heading: "Goal:",
          content: "Save cloud cost, improve efficiency, and promote smart resource management."
        }
      ]
    }
  ];

  return (
    <section id="case-studies" ref={ref} className="relative py-12 md:py-20 px-4 flex items-center justify-center overflow-hidden max-w-full">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-squid-charcoal to-black" />

      <div className="absolute top-1/3 left-1/3 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-flicker" />
      <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-flicker" style={{ animationDelay: '1.5s' }} />

      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="font-bebas text-4xl sm:text-6xl md:text-8xl text-primary text-glow text-center mb-6 sm:mb-16"
        >
          CASE STUDIES
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-card/50 border border-primary/30 p-4 sm:p-8 rounded-lg box-glow"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {caseStudies.map((study, index) => (
              <AccordionItem
                key={study.id}
                value={study.id}
                className="border border-primary/20 rounded-lg overflow-hidden bg-card/70 hover:border-primary/40 transition-all duration-300"
              >
                <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline group">
                  <div className="flex items-center gap-3 sm:gap-4 text-left">
                    <div className="flex-shrink-0 p-2 sm:p-3 rounded-full bg-primary/10 border border-primary/30 group-hover:bg-primary/20 transition-all duration-300">
                      <FileText className="w-5 h-5 sm:w-6 sm:h-6 text-primary" />
                    </div>
                    <span className="font-orbitron text-sm sm:text-lg md:text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                      {study.title}
                    </span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-4 sm:px-6 pb-4">
                  <div className="space-y-4 sm:space-y-6 pt-4 border-t border-primary/20">
                    {study.sections.map((section, sectionIndex) => (
                      <motion.div
                        key={sectionIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: sectionIndex * 0.1 }}
                        className="space-y-2"
                      >
                        <h4 className="font-orbitron text-primary text-sm sm:text-base font-semibold">
                          {section.heading}
                        </h4>
                        <p className="text-foreground/80 text-xs sm:text-sm md:text-base leading-relaxed pl-4">
                          {section.content}
                        </p>
                      </motion.div>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={isInView ? { scaleX: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
          className="h-1 bg-gradient-to-r from-transparent via-primary to-transparent mt-12"
        />
      </div>
    </section>
  );
};

export default CaseStudiesSection;
