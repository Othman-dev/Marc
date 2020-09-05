export const hashtagReducer = (tags, action) => {
    switch (action.type) {
      case 'tagSelected':
        return [
          ...tags.slice(0, action.index),
          {
            ...tags[action.index],
            active: !tags[action.index].active
          },
          ...tags.slice(action.index + 1)
        ];
      case 'tagAdd':
        return [
          ...tags,{
				name:action.name.toUpperCase(),
				active:true,
				custom:true
		  }
                  ];
      case 'tagRemove':
        return [
          ...tags.slice(0, action.index),
          ...tags.slice(action.index + 1)
                  ];
      default:
        return tags
    }
  }
  
 export const selectionReducer = (selected, action) => {
    switch (action.type) {
      case 'active':
		if (action.custom === true){
        return [
          ...selected, '$' + action.tag
        ];
		} else {
        return [
          ...selected, action.tag
        ];
		}
      case 'noneactive':
        return [
          ...selected.filter(tag => tag !== action.tag)
  
        ];
      default:
        return selected
    }
  }
  
