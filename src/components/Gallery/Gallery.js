import React, { useState, useEffect, useContext } from 'react'
import styles from './Gallery.module.scss'
// import config from '../../assets/config';
import AWS from 'aws-sdk'
import Subgallery from './Subgallery'
// import Slideshow from '../Slideshow/Slideshow';
// import { SlidesContext } from '../../Context/SlidesContext';
import { globalHistory as history } from '@reach/router'

export const Gallery = props => {
  // const { showSlides, setShowSlides, path } = useContext(SlidesContext)
  const images = [
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products1.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products2.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products3.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products4.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products5.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products6.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products7.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products8.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products9.webp',
    'https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/products/products10.webp'
  ]
  const {
    location: { path },
    navigate
  } = history
  // Has the array of images from S3 to display in gallery
  // const [images, setImages] = useState(images)
  // True if all images have finished loading for gallery
  const [loading, setLoading] = useState(false)
  // Set the picture in which the slideshow will start with
  const [slidesArr, setSlidesArr] = useState([])
  // The URL is used to compare with new URL. If !== then setShowSlides to false
  const [currentUrl, setCurrentUrl] = useState()

  // useEffect(() => {
  //   retrieveImages(path)
  //   // setCurrentUrl(path)

  //   // if (`/${currentUrl}` !== props.location.pathname) {
  //   //   // setShowSlides(false)
  //   //   retrieveImages(path)
  //   // }
  // }, [window.location.href])

  // const retrieveImages = async path => {
  //   // AWS.config.update({
  //   //   accessKeyId: 'AKIAIQL5K27R7F5BYKBQ',
  //   //   secretAccessKey: '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',
  //   //   region: 'us-west-1'
  //   // })

  //   // try {
  //   //   const result = await new AWS.S3().listObjectsV2({
  //   //     Bucket: 'visualsbydavidhophotos',
  //   //     Prefix: path
  //   //   })
  //   //   console.log(result)
  //   //   // setImages(
  //   //   //   result.Contents.slice(1).map(image => {
  //   //   //     return `https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/${image.Key}`
  //   //   //   })
  //   //   // )
  //   // } catch (err) {
  //   //   console.log(err)
  //   //   throw err
  //   // }

  //   AWS.config.update({
  //     accessKeyId: 'AKIAIQL5K27R7F5BYKBQ',
  //     secretAccessKey: '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',
  //     region: 'us-west-1'
  //   })
  //   await new AWS.S3().listObjectsV2(
  //     {
  //       Bucket: 'visualsbydavidhophotos',
  //       Prefix: path
  //     },
  //     (err, data) => {
  //       if (err) {
  //         console.log(err)
  //       } else {
  //         console.log(data)
  //         setImages(
  //           data.Contents.slice(1).map(image => {
  //             return `https://s3-us-west-1.amazonaws.com/visualsbydavidhophotos/${image.Key}`
  //           })
  //         )
  //       }
  //     }
  //   )
  // }

  // const goBackToGallery = (path) => {
  //   setShowSlides(false);
  //   retrieveImages(path);
  // }

  return (
    <div className={styles.gallery}>
      {/* {
        showSlides 
        ? 
          <Slideshow 
            slidesArr={slidesArr}
            goBackToGallery={goBackToGallery} /> // Pass in the array of images it'll map out
        : */}
      <Subgallery
        images={images} // Array of images for masonry gallery to map
        setSlidesArr={setSlidesArr} // Sets the first image in array for slideshow
        setLoading={setLoading} // Function to set boolean for images loaded
        loading={loading}
      />{' '}
      {/* // Component true if all images of finished loading */}
      {/* } */}
    </div>
  )
}
