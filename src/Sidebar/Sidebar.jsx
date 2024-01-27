import { useState } from 'react';

import NewJobButton from './NewJobButton';
import NewJobModal from './NewJobModal';

import styles from './Sidebar.module.css';

export default function Sidebar() {
  const [showNewJobModal, setShowNewJobModal] = useState(false);

  const handleNewJobButtonClick = () => {
    setShowNewJobModal(true);
  };

  const handleCloseNewJobModalButtonClick = () => {
    setShowNewJobModal(false);
  };

  return (
    <aside className={styles.sidebar}>
      <NewJobButton onNewJobButtonClick={handleNewJobButtonClick} />
      {showNewJobModal && (
        <NewJobModal
          onCloseNewJobModalButtonClick={handleCloseNewJobModalButtonClick}
        />
      )}
    </aside>
  );
}
