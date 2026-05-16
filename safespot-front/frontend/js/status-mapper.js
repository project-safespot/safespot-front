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
  WIDE: '광역대피소',
  지정대피소: '지정대피소',
  임시대피소: '임시대피소',
  광역대피소: '광역대피소'
};

var CONGESTION_LEVEL_LABELS = {
  LOW: '여유',
  MEDIUM: '보통',
  HIGH: '혼잡',
  FULL: '수용초과',
  UNKNOWN: '정보없음'
};

function formatShelterStatus(status) {
  return SHELTER_STATUS_LABELS[status] || status || '정보없음';
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
  return CONGESTION_LEVEL_LABELS[level] || level || '정보없음';
}

function normalizeUiStatus(item) {
  item = item || {};

  var shelterStatus = String(item.shelterStatus || item.status || '').toUpperCase();
  var congestionLevel = String(item.congestionLevel || '').toUpperCase();

  if (shelterStatus === 'FULL' || congestionLevel === 'FULL') return 'full';
  if (shelterStatus === 'STOPPED') return 'stopped';
  if (congestionLevel === 'HIGH' || congestionLevel === 'BUSY') return 'ready';
  if (
    shelterStatus === 'OPEN' ||
    shelterStatus === 'AVAILABLE' ||
    shelterStatus === 'OPERATING'
  ) {
    return 'open';
  }
  if (shelterStatus === 'PREPARING') return 'ready';
  if (congestionLevel === 'LOW' || congestionLevel === 'MEDIUM') return 'open';
  return 'unknown';
}

function getShelterCountBucket(item) {
  item = item || {};

  var congestionLevel = String(item.congestionLevel || '').toUpperCase();
  var shelterStatus = String(item.shelterStatus || item.status || '').toUpperCase();

  if (
    congestionLevel === 'HIGH' ||
    congestionLevel === 'FULL' ||
    shelterStatus === 'FULL' ||
    shelterStatus === 'STOPPED'
  ) {
    return 'high';
  }

  if (congestionLevel === 'LOW') return 'low';
  if (shelterStatus === 'AVAILABLE' || shelterStatus === 'OPEN' || shelterStatus === 'OPERATING') return 'low';

  return 'medium';
}

function calculateShelterStatusCounts(items) {
  return (items || []).reduce(function(counts, item) {
    var bucket = getShelterCountBucket(item);
    counts[bucket] += 1;
    return counts;
  }, { low: 0, medium: 0, high: 0 });
}

function updateHeroStatusCounts(items) {
  var counts = calculateShelterStatusCounts(items);
  var lowEl = document.getElementById('heroCountLow');
  var mediumEl = document.getElementById('heroCountMedium');
  var highEl = document.getElementById('heroCountHigh');

  if (lowEl) lowEl.textContent = String(counts.low);
  if (mediumEl) mediumEl.textContent = String(counts.medium);
  if (highEl) highEl.textContent = String(counts.high);

  return counts;
}
