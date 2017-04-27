require 'test_helper'

class ContactTest < ActiveSupport::TestCase

  test 'responds to name, email and body' do
    msg = Contact.new

    assert msg.respond_to?(:name),  'does not respond to :name'
    assert msg.respond_to?(:email), 'does not respond to :email'
    assert msg.respond_to?(:message),  'does not respond to :message'
  end

  test 'should be valid when all attributes are set' do
    attrs = {
      name: 'stephen',
      email: 'stephen@example.org',
      message: 'kthnxbai'
    }

    msg = Contact.new attrs
    assert msg.valid?, 'should be valid'
  end

  test 'name, email and body are all required' do
    msg = Contact.new

    refute msg.valid?, 'Blank mesage should be invalid'

    assert_match /blank/, msg.errors[:name].to_s
    assert_match /blank/, msg.errors[:email].to_s
    assert_match /blank/, msg.errors[:message].to_s
  end

end
