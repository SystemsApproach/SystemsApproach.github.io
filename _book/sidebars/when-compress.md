<!--- [!Note|style:flat|label:When to Compress|iconVisibility:hidden] --->
> **When to Compress**
>
>It might seem that compressing your data before sending it would
> always be a good idea, since the network would be able to deliver
> compressed data in less time than uncompressed data. This is not
> necessarily the case, however. Compression/decompression algorithms
> often involve time-consuming computations. The question you have to
> ask is whether or not the time it takes to compress/decompress the
> data is worthwhile given such factors as the host's processor speed
> and the network bandwidth. Specifically, if $$B\_c$$ is the average
> bandwidth at which data can be pushed through the compressor and
> decompressor (in series), $$B_n$$ is the network bandwidth (including
> network processing costs) for uncompressed data, $$r$$ is the average
> compression ratio, and if we assume that all the data is compressed
> before any of it is transmitted, then the time taken to send $$x$$ bytes
> of uncompressed data is $$x/B_n$$ whereas the time to compress it and
> send the compressed data is $$x/B_c + x/(rB_n)$$ Thus, compression
> is beneficial if $$x/B_c + x/(rB_n) < x/B_n$$ which is equivalent
> to $$B_c r/(r-1) \times B_n$$ For example, for a compression ratio
> of 2, $$B_c$$ would have to be greater than $$2 \times B_n$$ for
> compression to make sense.
> 
> For many compression algorithms, we may not need to compress the
> *whole* data set before beginning transmission (videoconferencing
> would be impossible if we did) but rather we need to collect some
> amount of data (perhaps a few frames of video) first. The amount of
> data needed to "fill the pipe" in this case would be used as the value
> of $$x$$ in the above equation.
> 
> Of course, when talking about lossy compression algorithms, processing
> resources are not the only factor. Depending on the exact application,
> users are willing to make very different trade-offs between bandwidth
> (or delay) and extent of information loss due to compression. For
> example, a radiologist reading a mammogram is unlikely to tolerate any
> significant loss of image quality and might well tolerate a delay of
> several hours in retrieving an image over a network. By contrast, it
> has become quite clear that many people will tolerate questionable
> audio quality in exchange for free global telephone calls (not to
> mention the ability to talk on the phone while driving).
