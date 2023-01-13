import * as faceapi from 'face-api.js';

const imgUrl = 'example.jpg'
const img = await faceapi.fetchImage(imgUrl)
const detectSingleFaceTask = faceapi.detectSingleFace(img)
const detection = detectSingleFaceTask.withFaceLandmarks().withFaceDescriptor()

