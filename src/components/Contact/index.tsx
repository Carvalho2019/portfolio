import { useState, FormEvent } from 'react';
import styles from './styles.module.scss';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [status, setStatus] = useState<'idle' | 'success'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') || '');
    const email = String(data.get('email') || '');
    const message = String(data.get('message') || '');
    const subject = encodeURIComponent(`Contact from portfolio - ${name}`);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);
    window.location.href = `mailto:taisomcarvalho15@gmail.com?subject=${subject}&body=${body}`;
    setStatus('success');
    form.reset();

    setTimeout(() => setStatus('idle'), 5000);
  };

  return (
    <section className={styles.container} id="contact" aria-labelledby="contact-title">
      <header className={styles.header}>
        <p className={styles.eyebrow}>Get in touch</p>
        <h2 id="contact-title" className={styles.title}>
          Let&apos;s build something together
        </h2>
        <p className={styles.description}>
          Have a project in mind? I&apos;d love to hear about it. Send me a message and I&apos;ll get back to you within 24 hours.
        </p>
      </header>

      <div className={styles.grid}>
        <div className={styles.info}>
          <h3 className={styles.infoTitle}>Other ways to reach me</h3>

          <ul className={styles.contactList} role="list">
            <li className={styles.contactItem}>
              <a
                href="mailto:taisomcarvalho15@gmail.com"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <polyline points="22,6 12,13 2,6" />
                  </svg>
                </span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>Email</span>
                  <span className={styles.contactValue}>taisomcarvalho15@gmail.com</span>
                </div>
              </a>
            </li>

            <li className={styles.contactItem}>
              <a
                href="https://api.whatsapp.com/send?phone=244946853092&text=Hello, I&apos;d like to discuss a project"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.472.099-.174.05-.372-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.372-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.57-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347-.297-.149-1.005-.364-2.388-1.249-2.364-1.534-.298-.174-.32-.198-.445-.198" />
                  </svg>
                </span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>WhatsApp</span>
                  <span className={styles.contactValue}>+244 946 853 092</span>
                </div>
              </a>
            </li>

            <li className={styles.contactItem}>
              <a
                href="https://www.linkedin.com/in/clesio-carvalho/"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>LinkedIn</span>
                  <span className={styles.contactValue}>clesio-carvalho</span>
                </div>
              </a>
            </li>

            <li className={styles.contactItem}>
              <a
                href="https://github.com/Carvalho2019"
                className={styles.contactLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span className={styles.contactIcon} aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                  </svg>
                </span>
                <div className={styles.contactDetails}>
                  <span className={styles.contactLabel}>GitHub</span>
                  <span className={styles.contactValue}>Carvalho2019</span>
                </div>
              </a>
            </li>
          </ul>

          <div className={styles.availability}>
            <span className={styles.availabilityDot} aria-hidden="true" />
            <span className={styles.availabilityText}>Available for freelance & full-time</span>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit} noValidate>
          <div className={styles.formGroup}>
            <label htmlFor="name" className="field-label">
              Your name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="field-input"
              placeholder="Cl&eacute;sio Carvalho"
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="email" className="field-label">
              Email address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="field-input"
              placeholder="you@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
          </div>

          <div className={styles.formGroup}>
            <label htmlFor="message" className="field-label">
              Project details
            </label>
            <textarea
              id="message"
              name="message"
              className="field-textarea"
              placeholder="Tell me about your project, timeline, and budget..."
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ width: '100%' }}
          >
            {status === 'success' ? (
              <>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                Message sent!
              </>
            ) : (
              'Send message'
            )}
          </button>

          {status === 'success' && (
            <p className={styles.successMessage} role="status">
              Thanks for reaching out! I&apos;ll get back to you soon.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}