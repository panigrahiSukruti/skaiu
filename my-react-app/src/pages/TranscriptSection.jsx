// src/components/TranscriptSection.jsx
import React, { useState } from 'react';
import styles from './TranscriptSection.module.css';
import searchIcon from '../../public/assets/search.png';

const description = 'On the other hand, we denounce with righteous indignation and dislike men who are so beguiled and demoralized by...';

const TranscriptSection = ({ projectName }) => {
  const [isEditMode, setEditMode] = useState(false);
  const [currDescription, setDescription] = useState(description);

  const handleSave = () => {
    setEditMode(false);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.head}>
        <h1 className={styles.projectName}>{projectName}</h1>
        <button className={styles.editButton} onClick={() => setEditMode(true)}>Edit Transcript</button>
      </div>
      <div className={styles.transcriptionWrapper}>
        {isEditMode ? (
          <div>
            <textarea
              className={styles.textArea}
              rows="12"
              value={currDescription}
              onChange={(e) => setDescription(e.target.value)}
            />
            <button className={styles.saveButton} onClick={handleSave}>Save & Exit</button>
          </div>
        ) : (
          <div>
            <p className={styles.description}>{currDescription}</p>
            <div className={styles.searchBox}>
              <img src={searchIcon} alt="Search Icon" />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default TranscriptSection;
