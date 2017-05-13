module ApplicationHelper

  def title(page_title)
    content_for(:title) { page_title }
  end

  def meta_description(page_description)
    content_for(:meta_description) { page_description }
  end

  def meta_keywords(page_keywords)
    content_for(:meta_keywords) { page_keywords }
  end

end
