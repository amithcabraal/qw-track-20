const handleSubmitGuess = () => {
  const result = calculateScore();
  setResult(result);
  setShowingResult(true);
  onGameComplete(result.score, timer);
  
  addGameResult({
    trackId: track.id,
    trackName: track.name,
    artistName: track.artists[0].name,
    albumImage: track.album.images[0]?.url || '',
    score: result.score,
    time: timer,
    timestamp: Date.now()
  });
};