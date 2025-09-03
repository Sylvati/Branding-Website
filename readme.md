# This is quite the generic site, feel free to use it! Break free from hosting services like beacons.ai, etc.

Here I'll explain stuff, mostly for me, but if anyone wants to use it, feel free.

assets/
- This is where I store multi-media, like profile pictures

_includes/
- This works with the code as reusable snippets of html

_layouts/
- This is where you put templates, like a header or footer

index.html
- This is always the default page

Small explanation about Jekyll:
- Jekyll has this concept of "Liquid variables"
- These are the things that make Jekyll convenient, like the "{{}}" stuff
- In order to make use of this, you need to put files with it in places that Jekyll will process stuff
- This is locations like "_layouts" and "_includes"
- You can also put "front matter" on certain pages to make it work, I believe?
To do this, just put:
```yaml
---
layout: default
title: Lach Landing
---
```
In front of your html file

How to run
- You're gonna need Ruby and Jekyll, see the gemfile for information
- Run runfile.bat, should work with bundler to ensure everything works smoothly.