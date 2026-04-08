import FullCalendar from '@fullcalendar/react';
import dayGridPlugin from '@fullcalendar/daygrid'
import interactionPlugin from '@fullcalendar/interaction'
import { useState } from 'react';
import ReactModal from 'react-modal';

function Compra()
{
  const [modalOpen, setModal] = useState(false);

  function handleDateClick(info)
  {
    setModal(true);
  }

  function closeModal()
  {
    setModal(false);
  }

    return (
    <div style={{ width: "800px", margin: "0 auto" }}>
      <FullCalendar plugins={[dayGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        dateClick={handleDateClick}> 
      </FullCalendar>

      <ReactModal
        style = {{content: {width: "300px", height: "600px",  margin: "auto", backgroundColor: "rgba(245, 255, 137, 0.86)"}, overlay: {backgroundColor: "rgba(119, 116, 116, 0.5)"}}}
        isOpen={modalOpen}
        onRequestClose = {closeModal}
        shouldCloseOnOverlayClick={true}>
          캘린더
      </ReactModal>
    </div>
    );
}
export default Compra;
