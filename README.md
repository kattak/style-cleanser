# style-cleanser
Chrome extension to save factoids.

## To Do
1. add Oauth
2. add styling
3. add voting
4. add commenting?

## Some big questions:

### Emojis

JQuery Emoji Picker
  https://github.com/wedgies/jquery-emoji-picker
  NB: "jQuery Emoji Picker is disabled for mobile devices, which already support the emoji keyboard."

Rails Emoji Picker
  https://github.com/ID25/rails_emoji_picker

This might be better if emojis will be in the database:
  https://github.com/mroth/emoji_data.rb
  
  
02.03.2017
  Let's just use emojipicker for now, can customize later.
  Will need to represent each and every emoji as AR model objects.
  >>Can use find_or_create_by
  
  Shortname for an emoji:
  :smile:
  >>Set shortname as name for emoji 
  
  "happy" "sad" "science"
  first first POC:
  >>-draw schema-
  >>use some strings as tags
  
name: KattoidFactoid

### Chrome Identity API for Chrome Extensions
  Example app:
  https://github.com/GoogleDeveloperExperts/chrome-extension-google-apis

### How to represent emojis in database?
  Do PoC with storing emojis in PSQL database first
  - Results: find_by(name: "😋") would this work?
