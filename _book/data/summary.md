# {{ page.title }}

This chapter has described how application data is encoded in network
packets. Unlike the protocols described earlier in this book, which you
can think of as processing *messages*, these transformations process
*data*. Multimedia data types, such as video, still image, and audio,
are increasingly driving developments in this space.

The first issue is presentation formatting, where the problem is
formatting the different types of data that application programs compute
on, such that they can be transmitted over a network and interpreted
correctly by the receiver. Data types such as integers, floating-point
numbers, character strings, arrays, and structures must be encoded in
some intelligible way. This involves both translating between machine
and network byte order and linearizing compound data structures. We
outlined the design space for presentation formatting and discussed four
specific mechanisms that fall on different points in this design space:
XDR, ASN.1, NDR, Protocol Buffers, and XML.

The second issue is compression, which is concerned with reducing the
bandwidth required to transmit different types of data. Compression
algorithms can be either lossless or lossy, with lossy algorithms being
most appropriate for image and video data. JPEG, MPEG, and MP3 all make
use of lossy compression protocols for still images, video, and audio
data, respectively. Video compression and encoding formats such as the
MPEG family of standards continue to evolve to meet the demand for
higher quality within the limits of available bandwidth.

## Further Reading

Our recommended reading list for this chapter includes two papers that
give an overview of the JPEG and MPEG standards, respectively. Their
main value is in explaining the various factors that shaped the
standards. We also recommend the paper on receiver-driven layered
multicast as an excellent example of a systems approach to design,
embracing the issues of multicast, congestion control, and video coding.

- Wallace, G. K. The JPEG still picture compression standard.
    *Communications of the ACM* 34(1):30-44, April 1991.

- Le Gall, D. MPEG: A video compression standard for multimedia
    applications. *Communications of the ACM* 34(1):46-58, April 1991.

- McCanne, S., V. Jacobson, and M. Vetterli. Receiver-driven layered
    multicast. *Proceedings of the SIGCOMM '96 Symposium,*
    pages 117-130, September 1996.
