import React, { useState, useEffect } from "react";
import { Modal } from "flowbite-react";

export default function DefaultModal() {
  const [openModal, setOpenModal] = useState("");
  const [popupIndex, setPopupIndex] = useState(0);

  const popups = [
    {
      header: "Beware of Lead in Batteries!",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Lead-acid batteries, commonly found in devices like car batteries,
            contain lead. When improperly disposed of, lead can leach into soil
            and water, posing serious health risks, especially for children.
            Lead exposure can lead to developmental delays, cognitive
            impairments, and other health issues.
          </p>
        </div>
      ),
    },
    {
      header: "The Mercury Menace in Fluorescent Bulbs",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Fluorescent bulbs contain small amounts of mercury. If broken or
            disposed of in regular trash, mercury vapor can be released, which
            is toxic when inhaled. It can harm the nervous system, kidneys, and
            lungs.
          </p>
        </div>
      ),
    },
    {
      header: "Hidden Danger: Arsenic in Circuit Boards",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Arsenic is used in semiconductor manufacturing and can be found in
            circuit boards. When e-waste is burned or left in landfills, it
            releases arsenic into the air and groundwater, causing environmental
            contamination and posing health risks, including cancer.
          </p>
        </div>
      ),
    },
    {
      header: "Cadmium: The Silent Threat in Rechargeable Batteries",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Rechargeable batteries often contain cadmium, a highly toxic heavy
            metal. Cadmium exposure can lead to kidney damage, lung cancer, and
            other health problems if not disposed of properly. Recycling these
            batteries is crucial.
          </p>
        </div>
      ),
    },
    {
      header: "BFRs: The Fire Safety Hazard in E-Waste",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Many electronics contain Brominated Flame Retardants (BFRs), which
            are used as flame retardants. When electronics are burned or end up
            in landfills, BFRs release harmful chemicals into the environment,
            impacting wildlife and potentially affecting human health.
          </p>
        </div>
      ),
    },
    {
      header: "The Silent Pollution: E-Waste's Environmental Impact",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            E-waste contains a cocktail of toxic materials. When improperly
            managed, it contributes to soil and water pollution, harming
            ecosystems and wildlife. Sustainable disposal and recycling are
            essential to mitigate this damage.
          </p>
        </div>
      ),
    },
    {
      header: "Be a Hero: Responsible E-Waste Disposal Saves Lives",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Your responsible e-waste disposal choices matter. By recycling your
            old devices, you prevent toxic substances from harming the
            environment and communities. You play a crucial role in safeguarding
            our planet and the health of future generations.
          </p>
        </div>
      ),
    },
    {
      header: "Recycling E-Waste: A Treasure Hunt for Valuable Resources",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            Recycling e-waste not only reduces environmental harm but also
            conserves precious resources. Many components of electronics contain
            valuable materials like gold, silver, and copper that can be reused
            in new products.
          </p>
        </div>
      ),
    },
    {
      header: "",
      body: (
        <div className="space-y-6">
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400"></p>
        </div>
      ),
    },
  ];

  useEffect(() => {
    const popup = () => {
      if (popupIndex < popups.length - 1) {
        setOpenModal("default");
      } else {
        setOpenModal(undefined);
      }
    };

    setTimeout(popup, 10000);
  }, [popupIndex]);

  const handleClose = () => {
    setOpenModal(undefined);
    setPopupIndex((prevIndex) => prevIndex + 1);
  };

  return (
    <div>
      <Modal show={openModal === "default"} onClose={handleClose} >
        <Modal.Header>{popups[popupIndex].header}</Modal.Header>
        <Modal.Body>{popups[popupIndex].body}</Modal.Body>
      </Modal>
    </div>
  );
}
