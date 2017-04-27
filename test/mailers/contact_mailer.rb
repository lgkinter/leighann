require 'test_helper'

class ContactMailerTest < ActionMailer::TestCase

  test "contact_me" do
    message = Contact.new name: 'anna',
                          email: 'anna@example.org',
                          message: 'hello, how are you doing?'

    email = ContactMailer.contact_me(message)

    assert_emails 1 do
      email.deliver_now
    end

    assert_equal 'Message from www.murdo.ch', email.subject
    assert_equal ['stephen@example.org'], email.to
    assert_equal ['anna@example.org'], email.from
    assert_match /hello, how are you doing?/, email.message.encoded
  end

end
