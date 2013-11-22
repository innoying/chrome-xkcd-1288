walk(document.body);

function walk(node) 
{
	// I stole this function from here:
	// http://is.gd/mwZp7E
	
	var child, next;

	switch ( node.nodeType )  
	{
		case 1:  // Element
		case 9:  // Document
		case 11: // Document fragment
			child = node.firstChild;
			while ( child ) 
			{
				next = child.nextSibling;
				walk(child);
				child = next;
			}
			break;

		case 3: // Text node
			handleText(node);
			break;
	}
}

function handleText(textNode) 
{
	var v = textNode.nodeValue;

	v = v.replace(new RegExp("Witnesses", "g"), "These dudes I know");
	v = v.replace(new RegExp("witnesses", "g"), "these dudes I know");
	
	v = v.replace(new RegExp("Allegedly", "g"), "Kinda probably");
	v = v.replace(new RegExp("allegedly", "g"), "kinda probably");
	
	v = v.replace(new RegExp("New study", "g"), "Tumblr post");
	v = v.replace(new RegExp("new study", "g"), "tumblr post");
	
	v = v.replace(new RegExp("Rebuild", "g"), "Avenge");
	v = v.replace(new RegExp("rebuild", "g"), "avenge");
	
	v = v.replace(new RegExp("Space", "g"), "Spaaace");
	v = v.replace(new RegExp("space", "g"), "spaaace");
	
	v = v.replace(new RegExp("Google Glass", "gi"), "Virtual Boy");
	
	v = v.replace(new RegExp("Smartphone", "gi"), "Pokédex");
	
	v = v.replace(new RegExp("Electric", "g"), "Atomic");
	v = v.replace(new RegExp("electric", "g"), "atomic");
	
	v = v.replace(new RegExp("Senator", "gi"), "Elf-lord");
	
	v = v.replace(new RegExp("Car", "g"), "Cat");
	v = v.replace(new RegExp("car", "g"), "cat");
	
	v = v.replace(new RegExp("Election", "g"), "Eating contest");
	v = v.replace(new RegExp("election", "g"), "eating contest");
	
	v = v.replace(new RegExp("Congressional leaders", "gi"), "River spirits");
	
	v = v.replace(new RegExp("Homeland Security", "gi"), "Homestar Runner");
	
	v = v.replace(new RegExp("Could not be reached for comment", "g"), "Is guilty and everyone knows it");
	v = v.replace(new RegExp("could not be reached for comment", "g"), "is guilty and everyone knows it");
	
	textNode.nodeValue = v;
}


