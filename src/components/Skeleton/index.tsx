import {
  SkeletonContainer,
  SkeletonGrid,
  SkeletonImage,
  SkeletonItem,
  SkeletonNameAndPrice,
} from "./styles";

const skeletonItemsQuantity = [0, 1, 2, 3, 4, 5, 6, 7];

export function Skeleton() {
  return (
    <SkeletonContainer>
      <SkeletonGrid>
        {skeletonItemsQuantity.map((index) => {
          return (
            <SkeletonItem key={index}>
              <SkeletonImage />
              <SkeletonNameAndPrice>
                <p />
                <span />
              </SkeletonNameAndPrice>

              <p />

              <button />
            </SkeletonItem>
          );
        })}
      </SkeletonGrid>
    </SkeletonContainer>
  );
}
