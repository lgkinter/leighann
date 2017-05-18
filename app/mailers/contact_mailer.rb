class ContactMailer < ApplicationMailer

  # Subject can be set in your I18n file at config/locales/en.yml
  # with the following lookup:
  #
  #   en.contact_mailer.contact_me.subject
  #
  def contact_me(contact)
    @body = contact.message
    @email = contact.email
    @name = contact.name

    mail to: "leighann.kinter@gmail.com", from: contact.email
  end
end
