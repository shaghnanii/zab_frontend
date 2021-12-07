import React from "react";

export const PMFooterContent = () => {
  return (
    <>
      <div className="modal fade" id="sample-modal-dialog-1">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Widget Options - Default Modal</h4>
            </div>

            <div className="modal-body">
              <p>
                Now residence dashwoods she excellent you. Shade being under his
                bed her. Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal invert fade" id="sample-modal-dialog-2">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">
                Widget Options - Inverted Skin Modal
              </h4>
            </div>

            <div className="modal-body">
              <p>
                Now residence dashwoods she excellent you. Shade being under his
                bed her. Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal gray fade" id="sample-modal-dialog-3">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Widget Options - Gray Skin Modal</h4>
            </div>

            <div className="modal-body">
              <p>
                Now residence dashwoods she excellent you. Shade being under his
                bed her. Much read on as draw. Blessing for ignorant exercise
                any yourself unpacked. Pleasant horrible but confined day end
                marriage. Eagerness furniture set preserved far recommend. Did
                even but nor are most gave hope. Secure active living depend son
                repair day ladies now.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="modal fade" id="logout_modal">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button
                type="button"
                className="close"
                data-dismiss="modal"
                aria-hidden="true"
              >
                &times;
              </button>
              <h4 className="modal-title">Confirmation</h4>
            </div>
            <div className="modal-body">
              Are you sure ? You want to log out of the application ?
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-default"
                data-dismiss="modal"
              >
                Cancel
              </button>
              <button
                onclick="show_logout_success_notification()"
                type="button"
                className="btn btn-info"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
