package book3.chapter5;

interface ThrowableBall
{
    void throwBall();
    void catchBall();
}
interface KickableBall
{
    void kickBall();
    void catchBall();
}
public interface PlayableBall
        extends ThrowableBall, KickableBall
{
    void dropBall();
}