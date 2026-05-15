var SHELTER_STATUS_LABELS = {
  OPERATING: '운영중',
  OPEN: '운영중',
  AVAILABLE: '여유',
  STOPPED: '운영중단',
  PREPARING: '준비중',
  FULL: '수용초과',
  UNKNOWN: '정보없음'
};

var ENTRY_STATUS_LABELS = {
  ENTERED: '입소',
  EXITED: '퇴소',
  TRANSFERRED: '이동'
};

var DISASTER_TYPE_LABELS = {
  EARTHQUAKE: '지진',
  FLOOD: '홍수',
  LANDSLIDE: '산사태'
};

var SHELTER_TYPE_LABELS = {
  DESIGNATED: '지정대피소',
  TEMPORARY: '임시대피소',
  WIDE: '광역대피소'
};

var CONGESTION_LEVEL_LABELS = {
  LOW: '여유',
  MEDIUM: '보통',
  HIGH: '혼잡',
  FULL: '수용초과',
  UNKNOWN: '정보없음'
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

function formatShelterType(type) {
  return SHELTER_TYPE_LABELS[type] || type || '-';
}

function formatCongestionLevel(level) {
  return CONGESTION_LEVEL_LABELS[level] || level || '-';
}

function normalizeUiStatus(item) {
  item = item || {};

  var shelterStatus = String(item.shelterStatus || '').toUpperCase();
  var congestionLevel = String(item.congestionLevel || '').toUpperCase();

  if (shelterStatus === 'FULL' || congestionLevel === 'FULL') return 'full';
  if (shelterStatus === 'STOPPED') return 'stopped';
  if (congestionLevel === 'HIGH' || congestionLevel === 'BUSY') return 'ready';
  if (
    shelterStatus === 'OPERATING' ||
    shelterStatus === 'OPEN' ||
    shelterStatus === 'AVAILABLE' ||
    congestionLevel === 'LOW' ||
    congestionLevel === 'MEDIUM'
  ) {
    return 'open';
  }
  return 'ready';
}
