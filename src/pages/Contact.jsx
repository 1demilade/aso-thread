import { useRef, useState } from 'react'
import { EMAIL, SOCIAL, STUDIO, WHATSAPP_DISPLAY } from '../config.js'
import { whatsappLink } from '../lib/whatsapp.js'
import Icon from '../components/Icon.jsx'
import './Contact.css'

const TOPICS = ['A question about an order', 'Made to measure', 'Aso-ebi for a group', 'Styling appointment', 'Something else']

const BAND = ['/images/fabric-hanging.jpg', '/images/plum-tunic.jpg', '/images/tulle-orange.jpg', '/images/gingham-shirt.jpg', '/images/kaftan-teal.jpg']

const EMPTY = { name: '', email: '', phone: '', topic: TOPICS[0], message: '' }

function validate(values) {
  const errors = {}
  if (values.name.trim().length < 2) errors.name = 'Enter your name so we know who to reply to.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim())) errors.email = 'This email address looks incomplete, for example ada@mail.com.'
  if (values.phone.trim() && !/^\+?[\d\s()-]{7,18}$/.test(values.phone.trim())) errors.phone = 'Use digits only, with an optional + for the country code.'
  if (values.message.trim().length < 10) errors.message = 'Tell us a little more: at least 10 characters.'
  return errors
}

function composeBody(v) {
  return [`Name: ${v.name}`, `Email: ${v.email}`, v.phone ? `Phone: ${v.phone}` : null, `Topic: ${v.topic}`, '', v.message]
    .filter((line) => line !== null)
    .join('\n')
}

export default function Contact() {
  const [values, setValues] = useState(EMPTY)
  const [touched, setTouched] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [ready, setReady] = useState(null)
  const formRef = useRef(null)
  const readyRef = useRef(null)

  const errors = validate(values)
  const show = (field) => (touched[field] || submitted) && errors[field]

  const onChange = (e) => {
    const { name, value } = e.target
    setValues((v) => ({ ...v, [name]: value }))
    setReady(null)
  }

  const onBlur = (e) => setTouched((t) => ({ ...t, [e.target.name]: true }))

  const onSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    if (Object.keys(errors).length) {
      const first = ['name', 'email', 'phone', 'message'].find((f) => errors[f])
      formRef.current?.elements[first]?.focus()
      return
    }
    setReady({ ...values })
    requestAnimationFrame(() => readyRef.current?.focus())
  }

  const field = (name, label, props = {}, hint) => {
    const error = show(name)
    const describedBy = [hint ? `${name}-hint` : null, error ? `${name}-error` : null].filter(Boolean).join(' ') || undefined
    const Tag = props.as === 'textarea' ? 'textarea' : 'input'
    const { as, ...rest } = props
    void as
    return (
      <div className={`field${error ? ' field--error' : ''}`}>
        <label htmlFor={name}>{label}</label>
        {hint ? (
          <p id={`${name}-hint`} className="field__hint">
            {hint}
          </p>
        ) : null}
        <Tag
          id={name}
          name={name}
          value={values[name]}
          onChange={onChange}
          onBlur={onBlur}
          aria-invalid={error ? true : undefined}
          aria-describedby={describedBy}
          {...rest}
        />
        {error ? (
          <p id={`${name}-error`} className="field__error">
            {error}
          </p>
        ) : null}
      </div>
    )
  }

  return (
    <div className="contact">
      <section className="contact__head page" aria-labelledby="contact-title">
        <h1 id="contact-title" className="display contact__title" data-reveal>
          <span>Talk to</span> <span>the studio</span>
        </h1>
        <p className="contact__lead" data-reveal style={{ '--i': 1 }}>
          For sizing, made-to-measure, aso-ebi for a whole party or a question about an order. WhatsApp is quickest.
        </p>
        <div className="contact__band" aria-hidden="true">
          {BAND.map((src, i) => (
            <div key={src} className="contact__band-strip" data-reveal="strip" style={{ '--i': i }}>
              <img src={src} alt="" width="600" height="900" />
            </div>
          ))}
        </div>
      </section>

      <div className="contact__body page">
        <aside className="contact__info" aria-label="Contact details" data-reveal>
          <a className="contact__wa" href={whatsappLink('Hello Aso & Thread, ')} target="_blank" rel="noreferrer">
            <Icon name="chat" />
            <span>
              <span className="contact__wa-label">WhatsApp</span>
              <span className="contact__wa-number tabular">{WHATSAPP_DISPLAY}</span>
            </span>
            <Icon name="arrow" />
          </a>
          <p className="contact__placeholder">Placeholder number for this concept site. Messages will not reach anyone.</p>

          <dl className="contact__list">
            <div>
              <dt>Email</dt>
              <dd>
                <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
              </dd>
            </div>
            <div>
              <dt>Studio</dt>
              <dd>{STUDIO.area}, by appointment</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>
                <table className="contact__hours">
                  <tbody>
                    {STUDIO.hours.map(([day, time]) => (
                      <tr key={day}>
                        <th scope="row">{day}</th>
                        <td className="tabular">{time}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </dd>
            </div>
            <div>
              <dt>Follow</dt>
              <dd>
                <ul className="contact__social">
                  {SOCIAL.map((s) => (
                    <li key={s.label}>
                      <a href={s.href} target="_blank" rel="noreferrer">
                        {s.label}
                      </a>{' '}
                      <span>{s.handle}</span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
          </dl>
        </aside>

        <section className="contact__form-wrap" aria-labelledby="form-title" data-reveal style={{ '--i': 1 }}>
          <h2 id="form-title" className="contact__form-title">
            Write to us
          </h2>
          <form ref={formRef} className="contact__form" onSubmit={onSubmit} noValidate>
            <div className="contact__pair">
              {field('name', 'Your name', { autoComplete: 'name', required: true })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email', inputMode: 'email', required: true })}
            </div>
            <div className="contact__pair">
              {field('phone', 'Phone (optional)', { type: 'tel', autoComplete: 'tel', inputMode: 'tel' })}
              <div className="field">
                <label htmlFor="topic">What is it about?</label>
                <select id="topic" name="topic" value={values.topic} onChange={onChange}>
                  {TOPICS.map((t) => (
                    <option key={t}>{t}</option>
                  ))}
                </select>
              </div>
            </div>
            {field(
              'message',
              'Message',
              { as: 'textarea', rows: 6, required: true },
              values.topic === 'Made to measure' || values.topic === 'Aso-ebi for a group' ? 'Include the date you need it by and, for aso-ebi, how many people.' : null,
            )}
            <div className="contact__submit">
              <button type="submit" className="btn btn--ink">
                Prepare message
              </button>
              <p>This site has no message service yet. Your message is prepared for your own email or WhatsApp, and nothing is sent until you send it there.</p>
            </div>
          </form>

          {ready ? (
            <div ref={readyRef} className="contact__ready" tabIndex={-1} role="status">
              <h3>Your message is ready, not sent</h3>
              <p>Choose how to send it. Your email app or WhatsApp will open with everything filled in.</p>
              <div className="contact__ready-actions">
                <a
                  className="btn"
                  href={`mailto:${EMAIL}?subject=${encodeURIComponent(`${ready.topic}, from ${ready.name}`)}&body=${encodeURIComponent(composeBody(ready))}`}
                >
                  <Icon name="mail" />
                  Open in email
                </a>
                <a className="btn btn--quiet" href={whatsappLink(composeBody(ready))} target="_blank" rel="noreferrer">
                  <Icon name="chat" />
                  Send on WhatsApp
                </a>
              </div>
            </div>
          ) : null}
        </section>
      </div>
    </div>
  )
}
