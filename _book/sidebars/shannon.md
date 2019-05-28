<!--- [!Note|style:flat|label:Shannon-Hartley Theorem|iconVisibility:hidden] --->
> **Shannon-Hartley Theorem**
>
> There has been an enormous body of work done in the related areas of 
> signal processing and information theory, studying everything from how 
> signals degrade over distance to how much data a given signal can 
> effectively carry. The most notable piece of work in this area is a 
> formula known as the *Shannon-Hartley theorem*. Simply stated,
> this theorem gives an upper bound to the capacity of a link, in terms 
> of bits per second (bps), as a function of the signal-to-noise ratio 
> of the link, measured in decibels (dB), and the bandwidth of the 
> channel, measured in Hertz (Hz). (As noted previously, "bandwidth" is 
> a bit of an overloaded term in communications; here we use it to refer 
> to the range of frequencies available for communication.) 
> 
> As an example, we can apply the Shannon-Hartley theorem to determine 
> the rate at which we can expect to transmit data over a voice-grade 
> phone line without suffering from too high an error rate. A standard 
> voice-grade phone line typically supports a frequency range of 300 Hz 
> to 3300 Hz, a channel bandwidth of 3 kHz. 
> 
> The theorem is typically given by the following formula:
> $$C = B \log_2 (1 + S/N)$$ where $$C$$ is the achievable channel 
> capacity measured in bits per second, $$B$$ is the bandwidth of the 
> channel in Hz (3300 Hz - 300 Hz = 3000 Hz), $$S$$ is the average 
> signal power, and $$N$$ is the 
> average noise power. The signal-to-noise ratio ($$S/N$$, or SNR) is 
> usually expressed in decibels, related as follows:
> $$\mathsf{SNR} = 10 \times \log_{10}(S/N)$$. Thus, a typical 
> signal-to-noise ratio of 30 dB would imply that $$S/N = 1000$$. 
> Thus, we have $$C = 3000 \times \log_2(1001)$$ which equals 
> approximately 30 Kbps. 
> 
> When dial-up modems were the main way to connect to the Internet in 
> the 1990s, 56 kbps was a common advertised capacity for a modem (and 
> continues to be about the upper limit for dial-up). However, the 
> modems often achieved lower speeds in practice, because they didn't 
> always encounter a signal-to-noise ratio high enough to achieve 
> 56kbps. 
> 
> The Shannon-Hartley theorem is equally applicable to all sorts of 
> links ranging from wireless to coaxial cable to optical fiber. It 
> should be apparent that there are really only two ways to build a high 
> capacity link: start with a high bandwidth channel, or achieve a high 
> signal to noise ratio. But even those 
> conditions won't guarantee a high capacity link—it often takes quite 
> a bit of ingenuity on the part of people who design channel coding 
> schemes to achieve the theoretical limits of a channel. This ingenuity 
> is particularly apparent today in wireless links, where there is a 
> great incentive to get the most bits per second from a given amount of 
> wireless spectrum (the channel bandwidth) and signal power level (and 
> hence SNR). 
