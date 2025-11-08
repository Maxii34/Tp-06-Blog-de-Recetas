import Modal from "react-bootstrap/Modal";
import { useRecetas } from "../Context/RecetasContext";

export const ModalAdminVer = () => {
  const { setSmShow, setLgShow, smShow, lgShow } = useRecetas();

  return (
    <>
      {/* Modal grande */}
      <Modal
        size="lg"
        show={lgShow}
        onHide={() => setLgShow(false)}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-lg">
            Large Modal
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>...</Modal.Body>
      </Modal>
    </>
  );
};