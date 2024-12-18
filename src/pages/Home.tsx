const handleGameComplete = (score: number, time: number) => {
  if (currentTrack) {
    setPlayedTracks(prev => new Set([...prev, currentTrack.id]));
    if (challengeData) {
      const currentIndex = playedTracks.size;
      setPlayerResults(prev => [...prev, {
        trackId: currentTrack.id,
        trackName: currentTrack.name,
        artistName: currentTrack.artists[0].name,
        albumImage: currentTrack.album.images[0]?.url || '',
        score,
        time,
        timestamp: Date.now()
      }]);
    }
  }
};