import React from "react";

import styles from "./serviceIndustries.module.scss";
import { industriesData } from "@/lib/static/data";

const { container, serveIndustry, serveIndustry_wrapper, serveIndustry_box } =
  styles;

const ServiceIndustries = () => {
  return (
    <section className={serveIndustry}>
      <div className={`${container} dContainer`}>
        <h2>Which Industries Do We Serve?</h2>
        <p>
          We have been fortunate enough to create websites for hundreds of
          business owners over the last five years with clients throughout the
          world.
        </p>

        <div className={serveIndustry_wrapper}>
          {industriesData.map(({ Icon, label }, idx) => (
            <div key={idx + label} className={`${serveIndustry_box} bg-lightText border border-lightText dark:border-lightText-dark hover:!border-primaryClr`}>
              <Icon size={50} color="#ff8a56" />
              <p>{label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIndustries;
