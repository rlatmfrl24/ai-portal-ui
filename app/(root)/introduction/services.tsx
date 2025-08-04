import ServicesImage from "@/public/intro_2_bg.svg";
import styles from "./introduction.module.css";

export default function Services() {
  return (
    <div className="w-full relative min-h-screen">
      {/* 배경 이미지 - 화면 왼쪽에 고정 */}
      <div className="absolute left-0 top-0 h-full flex items-center">
        <ServicesImage />
      </div>
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        <span className="text-xl font-bold bg-gradient-to-r from-red-63 from-10% to-blue-66 to-90% text-transparent bg-clip-text">
          SERVICES
        </span>
        <span className="text-7xl font-bold text-black mt-4">
          Flexible Document
        </span>
        <span className="text-6xl italic text-black">
          Input via Multiple Channels
        </span>
        <p className="text-2xl text-black mt-10 text-center text-balance">
          Transform your complex logistics paperwork into verified, actionable
          data with a single solution
          <br /> that combines flexible multi-channel input, AI-powered
          recognition, intelligent data extraction,
          <br /> and an interactive verification experience you can customize to
          your needs
        </p>
        <div className="flex gap-6 mt-14">
          <div className={styles.serviceItem}>
            <span className={styles.textStrokeBlue}>01</span>
            <span className="text-xl font-bold text-blue-62">
              Comprehensive
              <br /> Document Automation
            </span>
            <span className="w-[246px]">
              Automate data extraction from all key logistics documents with
              90%+ accuracy. Effortlessly process diverse templates and formats
              (PDF, images) at high speed
            </span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.textStrokeBlue}>02</span>
            <span className="text-xl font-bold text-blue-62">
              Boost Efficiency,
              <br /> Slash Costs
            </span>
            <span className="w-[246px]">
              Drastically reduce manual data entry and review time, achieving up
              to 70-80% in operational cost savings. Our self-learning AI
              continuously improves, boosting efficiency over time.
            </span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.textStrokeRed}>03</span>
            <span className="text-xl font-bold text-red-72">
              API integration
            </span>
            <span className="w-[246px]">
              Instantly receive extracted data structured in JSON, XML, or CSV.
              Robust APIs ensure smooth integration with your existing systems.
              Rapidly scale your automation as your business grows.
            </span>
          </div>
          <div className={styles.serviceItem}>
            <span className={styles.textStrokeRed}>04</span>
            <span className="text-xl font-bold text-red-72">
              AI-Powered Intelligent
              <br /> Extraction
            </span>
            <span className="w-[246px]">
              AI intelligently identifies crucial information like B/L No.,
              Container No., Item, and Quantity. Built-in validation logic
              maximizes data reliability. Get accurate, classified data, not
              just raw text.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
