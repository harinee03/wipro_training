import React, { Component } from 'react'
import './BookList.css'

class AuthorInfo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: true,
      authorData: null,
    }
    this._isMounted = false
  }

  componentDidMount() {
    this._isMounted = true
    this.loadAuthor(this.props.author)
  }

  componentDidUpdate(prevProps) {
    // If author prop changed, reload author data
    if (prevProps.author !== this.props.author) {
      this.setState({ loading: true, authorData: null }, () => {
        this.loadAuthor(this.props.author)
      })
    }
  }

  componentWillUnmount() {
    this._isMounted = false
  }

  loadAuthor(author) {
    console.log(`AuthorInfo: Loading details for ${author}...`)

    // Simulate fetching author-specific data (1 second)
    setTimeout(() => {
      if (!this._isMounted) return

      const authorDetails = {
        'Paulo Coelho': {
          bio:
            'Paulo Coelho is a Brazilian novelist whose simple, spiritual parables have touched millions worldwide. His best-known work, The Alchemist, explores personal legend and destiny.',
          topBooks: [
            'The Alchemist — A fable about following your dreams and listening to your heart.',
            'Brida — A young woman’s search for knowledge and the mysteries of life.',
            'Veronika Decides to Die — A reflection on madness, conformity, and meaning.',
          ],
        },
        'James Clear': {
          bio:
            'James Clear writes about habits, decision making and continuous improvement. His practical approach helps readers build systems for long-term change.',
          topBooks: [
            'Atomic Habits — Clear strategies to form good habits and break bad ones.',
            'The Clear Habit Journal — A guided journal to track habit development and reflections.',
            'Mini Habits — Small daily routines that produce big results over time.',
          ],
        },
        'Robert Kiyosaki': {
          bio:
            'Robert Kiyosaki is an entrepreneur and educator known for financial literacy teachings that challenge traditional schooling about money.',
          topBooks: [
            'Rich Dad Poor Dad — Contrasts two mindsets about money and investing.',
            'Cashflow Quadrant — Explains different ways people earn income and how to move to investor/entrepreneur quadrants.',
            'Rich Dad’s Guide to Investing — Practical lessons on building wealth through investing.',
          ],
        },
        'Franz Kafka': {
          bio:
            'Franz Kafka was a German-speaking writer whose surreal stories probe alienation, bureaucracy and existential anxiety—often blending the mundane with the nightmarish.',
          topBooks: [
            'The Metamorphosis — A story about alienation after a man transforms into an insect.',
            'The Trial — A haunting portrayal of a man prosecuted by a remote, inscrutable authority.',
            'The Castle — A parable of obsession, authority and the impossible pursuit of acceptance.',
          ],
        },
      }

      const data = authorDetails[author] || {
        bio: `${author} is an author with notable works.`,
        topBooks: ['Sample Book 1', 'Sample Book 2', 'Sample Book 3'],
      }

      this.setState({ loading: false, authorData: data })
    }, 1000)
  }

  render() {
    const { author } = this.props
    const { loading, authorData } = this.state

    if (loading) return <p>Loading details for {author}...</p>

    return (
      <div className="author-info">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h4>About {author}</h4>
          {/* optional close button */}
          <button
            className="btn btn-sm btn-outline-secondary"
            onClick={() => {
              // Ask parent to hide by calling a callback if provided via props
              if (this.props.onClose) this.props.onClose()
            }}
          >
            Close
          </button>
        </div>

        <p>{authorData.bio}</p>

        <h5>Top 3 Books</h5>
        <ul>
          {authorData.topBooks.map((b, i) => (
            <li key={i}>{b}</li>
          ))}
        </ul>
      </div>
    )
  }
}

export default AuthorInfo
