import * as React from "react";

export default function ClickOutside() {
  //Add state to keep track if the modal is open or closed
  const [isOpen, setIsOpen] = React.useState(false);

  //Add ref to have access to the modal
  const modalRef = React.useRef(null)

  React.useEffect(() => {
    //you don't want to let the user open the modal if it's already opened
    if(isOpen === true){

    const handleEvent = (e) => {
      const element = modalRef.current
      //If the element exisist and the user has clicked in an area that is not contained by it
      //Close the modal
      if (element && !element.contains(e.target)) {
        setIsOpen(false)
      }
    }
    //We listen for any clicks
    document.addEventListener("pointerdown", handleEvent)

    //Cleanup function to remove the event listener
    return () => {
    document.removeEventListener("pointerdown", handleEvent)
     }
    }
  },[isOpen])

  //When the button is clicked and the modal hasn't been already opened
  //Open the modal
  const handleOpenModal = () => {
    if (isOpen === false){
      setIsOpen(true)
    }
  };

  const handleCloseModal = () => {
    setIsOpen(false)
  };

  return (
    <>
      <section>
        <h1>Click Outside</h1>
        <button className="link" onClick={handleOpenModal}>
          Open Modal
        </button>
      </section>
      {isOpen && (
        <dialog ref = {modalRef}>
          <button onClick={handleCloseModal}>Close</button>
          <h2>Modal</h2>
          <p>
            Click outside the modal to close (or use the button) whatever you
            prefer.
          </p>
        </dialog>
      )}
    </>
  );
}
