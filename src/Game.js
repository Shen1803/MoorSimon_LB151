import React, { Component } from 'react';
import './GuessMyWord.css';

class GuessMyWord extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordToGuess: 'react',
      incorrectGuessesRemaining: 3,
      guessesMade: [],
      betAmount: 0,
      playerMoney: 100,
      gameWon: false,
    };
    this.handleGuess = this.handleGuess.bind(this);
    this.handleBetAmountChange = this.handleBetAmountChange.bind(this);
    this.resetGame = this.resetGame.bind(this);
  }

  handleGuess(event) {
    event.preventDefault();
    const guess = event.target[0].value;
    let isCorrect = this.state.wordToGuess.includes(guess);
    if (isCorrect) {
      const guessesMadeSet = new Set(this.state.guessesMade);
      guessesMadeSet.add(guess);
      this.setState(prevState => ({
        guessesMade: [...guessesMadeSet],
      }));
      if ([...guessesMadeSet].sort().join('') === this.state.wordToGuess) {
        this.setState(prevState => ({
          gameWon: true,
          playerMoney: prevState.playerMoney + prevState.betAmount,
        }), () => {
          const playAgain = window.confirm('Congratulations, you won! Play again?');
          if (playAgain) {
            this.resetGame();
          }
        });
      } else {
        this.setState(prevState => ({
          playerMoney: prevState.playerMoney + prevState.betAmount,
        }));
      }
    } else {
      const remainingGuesses = this.state.incorrectGuessesRemaining - 1;
      if (remainingGuesses === 0) {
        this.setState({ gameWon: false });
        const playAgain = window.confirm('Game Over. Better luck next time!');
        if (playAgain) {
          this.resetGame();
          this.setState({ playerMoney: 100 });
        } else {
          this.setState({ playerMoney: 0 });
        }
      } else {
        this.setState(prevState => ({
          guessesMade: [...prevState.guessesMade, guess],
          incorrectGuessesRemaining: remainingGuesses,
          playerMoney: prevState.playerMoney - prevState.betAmount,
        }));
      }
    }
  }

  handleBetAmountChange(betAmount) {
    this.setState({
      betAmount: betAmount,
    });
  }

  resetGame() {
    this.setState({
      wordToGuess: 'react',
      incorrectGuessesRemaining: 3,
      guessesMade: [],
      betAmount: 0,
      playerMoney: this.state.playerMoney,
      gameWon: false,
    });
  }

  render() {
    const { wordToGuess, incorrectGuessesRemaining, guessesMade, betAmount, playerMoney, gameWon } = this.state;

    const displayedWord = wordToGuess
      .split('')
      .map(letter =>
        guessesMade.includes(letter) ? letter : '_'
      )
      .join(' ');
    return (
      <div className="guess-my-word">
        <h1 className="title">Guess My Word</h1>
        <p className="word">{displayedWord}</p>
        {gameWon ? (
          <p className="win-message">Congratulations, you won!</p>
        ) : (
          <>
            <p className="remaining-guesses">Incorrect Guesses Remaining: {incorrectGuessesRemaining}</p>
            <form onSubmit={this.handleGuess}>
              <label>
                Guess a letter:
                <input type="text" maxLength={1} className="guess-input" />
              </label>
              <button type="submit" className="submit-button">Submit</button>
            </form>
            <label>
              Bet amount:
              <input type="number" value={betAmount} onChange={e => this.handleBetAmountChange(parseInt(e.target.value))} min={0} max={1000} />
            </label>
            <p  className="money-label">Player Money: {playerMoney}</p>
          </>
        )}
      </div>
    );
  }
}

export default GuessMyWord;
