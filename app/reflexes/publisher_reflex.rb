# frozen_string_literal: true

class PublisherReflex < ApplicationReflex
  def publish
    post = Post.find(element.dataset[:post_id])
    post.update(published: true, published_at: Time.now)
  end

  def unpublish
    post = Post.find(element.dataset[:post_id])
    post.update(published: false, published_at: nil)
  end
  # Learn more at: https://docs.stimulusreflex.com/reflexes#reflex-classes

end
