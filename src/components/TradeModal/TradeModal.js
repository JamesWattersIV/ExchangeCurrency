import React, { useState } from "react";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";

//Component Import
import Button from "../../pages/Login/Button/Button";

//SCSS Import
import "./TradeModal.scss";

const TradeModal = ({ request, setRequest, TradeSummary, onAccept }) => {
  const [open, setOpen] = useState(request);

  return (
    <div>
      <Modal
        className="modal"
        open={open}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className="modal-bg">
            {TradeSummary /*TradeSummary Component*/}
            <div className="button-row">
              <Button
                type="submit"
                className="btn"
                value="Confirm Trade"
                onClick={onAccept}
              />
              <Button
                type="button"
                className="btn alt"
                value="Cancel"
                onClick={setRequest}
              />
            </div>
          </div>
        </Fade>
      </Modal>
    </div>
  );
};

export default TradeModal;
