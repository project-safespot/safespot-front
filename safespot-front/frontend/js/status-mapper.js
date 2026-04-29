var SHELTER_STATUS_LABELS = {
  OPERATING: '운영중',
  STOPPED: '운영중단',
  PREPARING: '준비중'
};

var ENTRY_STATUS_LABELS = {
  ENTERED: '입소',
  EXITED: '퇴소',
  TRANSFERRED: '이동'
};

var DISASTER_TYPE_LABELS = {
  EARTHQUAKE: '지진',
  FLOOD: '수해',
  LANDSLIDE: '산사태'
};

function formatShelterStatus(status) {
  return SHELTER_STATUS_LABELS[status] || status || '-';
}

function formatEntryStatus(status) {
  return ENTRY_STATUS_LABELS[status] || status || '-';
}

function formatDisasterType(type) {
  return DISASTER_TYPE_LABELS[type] || type || '-';
}
