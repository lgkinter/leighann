class Contact
  # < MailForm::Base
  include ActiveModel::Model
  attr_accessor :name, :email, :message, :nickname
  validates :name, :email, :message, presence: true
  #attribute :nickname, :captcha => true

  # Declare the e-mail headers. It accepts anything the mail method in ActionMailer accepts.
  #def headers
  #  {
  #    :subject => "Contact from LeighannKinter.com",
  #    :to => "leighann.kinter@gmail.com",
  #    :from => %("#{name}" <#{email}>)
  #  }
  #end

end
