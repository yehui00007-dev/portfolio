# Media

Drop files here. Paths in the site start at /media/…

Expected now (the site shows a labeled placeholder until each file exists):

- covers/speechify.jpg, covers/vsco-one.jpg, covers/ai-lab.jpg, covers/capture.jpg
- about/photo-1.jpg, about/photo-2.jpg

Case study media: make a folder per project (speechify/, vsco-one/ …) and
point components at it, e.g. <Media src="/media/speechify/flow.png" … />

Tips
- Images: export at 2x, JPG/WebP for screenshots with photos, PNG for UI with flat color. Aim < 500 KB.
- Videos: MP4 (H.264), no audio, 1080p max, aim < 8 MB. Loops autoplay muted.
- Run `npm run dev` and open /todo to see every missing file.
