# Preview all emails at http://localhost:3000/rails/mailers/contact_mailer
class ContactMailerPreview < ActionMailer::Preview
  def sample_mail_preview
    message = Contact.new(name: 'anna',
                          email: 'anna@example.org',
                          message: 'hello, how are you doing?')
    ContactMailer.contact_me(message)
  end
end
