# frozen_string_literal: true

class ElementsReflex < ApplicationReflex
  def sort
    
    elements = JSON.parse(element.dataset[:elements])
    elements.each do |element|
        element_record = Element.find(element['id'])
        element_record.update(position: element['position'])
    end
    
    #NOTE: this is a hack; may break with future version of Stimulus Reflex
    
   # @halted = true
  end
  

end
